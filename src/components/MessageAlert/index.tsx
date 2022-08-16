import * as React from 'react';
import RCNotification from 'rc-notification';
import {
  NotificationInstance as RCNotificationInstance,
  NoticeContent,
} from 'rc-notification/lib/Notification';
import { Alert } from 'antd';

export type NoticeType = 'info' | 'success' | 'error' | 'warning';

let messageInstance: RCNotificationInstance | null;
let defaultDuration = 3;
let defaultTop: number = 85;
let getContainer: () => HTMLElement;
let maxCount: number = 3;
let key = 1;
const prefix = 'bnk-notification';

export function getKeyThenIncreaseKey() {
  key += 1;
  return key;
}

export interface ConfigOptions {
  top?: number;
  duration?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  transitionName?: string;
  maxCount?: number;
  rtl?: boolean;
}

function setMessageConfig(options: ConfigOptions) {
  if (options.top !== undefined) {
    defaultTop = options.top;
    messageInstance = null;
  }
  if (options.duration !== undefined) {
    defaultDuration = options.duration;
  }
  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }
  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }
}

export interface ArgsProps {
  content: React.ReactNode;
  duration?: number;
  type: NoticeType;
  prefixCls?: string;
  rootPrefixCls?: string;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  onClose?: () => void;
  icon?: React.ReactNode;
  key?: string | number;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function getNotificationInstance(
  args: ArgsProps,
  callback: (instance: RCNotificationInstance) => void,
) {
  const {
    prefixCls: customizePrefixCls,
    getPopupContainer: getContextPopupContainer,
  } = args;

  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  const instanceConfig = {
    prefixCls: customizePrefixCls || prefix,
    style: { top: defaultTop, left: '50%' },
    getContainer: getContainer || getContextPopupContainer,
    maxCount,
  };

  RCNotification.newInstance(instanceConfig, (instance: any) => {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }
    messageInstance = instance;
    callback(instance);
  });
}

function getRCNoticeProps(args: ArgsProps): NoticeContent {
  const duration =
    args.duration !== undefined ? args.duration : defaultDuration;
  const removeTheMessage = (target: any) => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  return {
    key: args.key,
    duration,
    style: args.style || {},
    className: args.className,
    content: (
      <Alert
        message={args.content}
        showIcon
        closable
        type={args.type}
        onClose={() => removeTheMessage(args.key)}
      />
    ),
    onClose: args.onClose,
    onClick: args.onClick,
  };
}

function notice(args: ArgsProps) {
  const target = args.key || getKeyThenIncreaseKey();
  const closePromise = new Promise((resolve) => {
    const callback = () => {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }
      return resolve(true);
    };

    getNotificationInstance(args, (instance: any) => {
      instance.notice(
        getRCNoticeProps({ ...args, key: target, onClose: callback }),
      );
    });
  });
  const result: any = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
  result.then = (filled: ThenableArgument, rejected: ThenableArgument) =>
    closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

export interface ThenableArgument {
  (val: any): void;
}

export interface MessageType extends PromiseLike<any> {
  (): void;
}

const api: any = {
  open: notice,
  config: setMessageConfig,
  destroy(messageKey?: React.Key) {
    if (messageInstance) {
      if (messageKey) {
        const { removeNotice } = messageInstance;
        removeNotice(messageKey);
      } else {
        const { destroy } = messageInstance;
        destroy();
        messageInstance = null;
      }
    }
  },
};

type ConfigContent = React.ReactNode;
type ConfigDuration = number | (() => void);
type JointContent = ConfigContent | ArgsProps;
export type ConfigOnClose = () => void;

function isArgsProps(content: JointContent): content is ArgsProps {
  return (
    Object.prototype.toString.call(content) === '[object Object]' &&
    !!(content as ArgsProps).content
  );
}

export function attachTypeApi(originalApi: MessageApi, type: NoticeType) {
  originalApi[type] = (
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ) => {
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type });
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }
    return originalApi.open({ content, duration, type, onClose });
  };
}

(['success', 'info', 'warning', 'error', 'loading'] as NoticeType[]).forEach(
  (type) => attachTypeApi(api, type),
);

export interface MessageInstance {
  info(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ): MessageType;
  success(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ): MessageType;
  error(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ): MessageType;
  warning(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ): MessageType;
  open(args: ArgsProps): MessageType;
}

export interface MessageApi extends MessageInstance {
  warn(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose,
  ): MessageType;
  config(options: ConfigOptions): void;
  destroy(messageKey?: React.Key): void;
  useMessage(): [MessageInstance, React.ReactElement];
}

export default api as MessageApi;
