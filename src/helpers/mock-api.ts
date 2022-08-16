import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import API from '../constants/API';

/* const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; */

const Users = [
  {
    uid: 1,
    username: 'ui-react',
    role: 'admin',
    password: 'uireact',
    email: 'ui-react@imaginato.com',
    firstName: 'Kobe',
    lastName: 'Bryant',
  },
  {
    uid: 2,
    username: 'doejane',
    role: 'user',
    password: 'Jane@123',
    email: 'doejane@domain.com',
  },
];

// const Codes = [
//   {
//     id: 1,
//     code: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
//     user_id: 2,
//   },
// ];

const Companies = [
  {
    id: '1',
    name: 'Invalon',
    created_at: 'Oct 10, 2021',
  },
  {
    id: '2',
    name: 'Navico',
    created_at: 'Oct 10, 2021',
  },
  {
    id: '3',
    name: 'Wattxn',
    created_at: 'Oct 10, 2021',
  },
  {
    id: '4',
    name: 'Binford',
    created_at: 'Oct 10, 2021',
  },
  {
    id: '5',
    name: 'Yelp',
    created_at: 'Oct 10, 2021',
  },
];

const MockAPI = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios);
  // mock.onPost(API.login.post).reply((config: any) => {
  //   const user = JSON.parse(config.data);
  //   const validUser = Users.filter(
  //     (usr) => usr.email === user.email && usr.password === user.password,
  //   );

  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (validUser.length === 1) {
  //         // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
  //         const token = ACCESS_TOKEN;

  //         // JWT AccessToken
  //         const tokenObj = { accessToken: token }; // Token Obj
  //         const userObj = {
  //           uid: validUser[0].uid,
  //           username: validUser[0].username,
  //           role: validUser[0].role,
  //           email: validUser[0].email,
  //           firstName: validUser[0].firstName,
  //           lastName: validUser[0].lastName,
  //         };
  //         const validUserObj = { ...userObj, ...tokenObj }; // validUser Obj

  //         resolve([
  //           200,
  //           {
  //             success: true,
  //             results: validUserObj,
  //           },
  //         ]);
  //       } else {
  //         reject(
  //           new Error(
  //             'Email and password are invalid. Please enter correct email and password',
  //           ),
  //         );
  //       }
  //     });
  //   });
  // });

  mock.onPost(API.register.post).reply((config: any) => {
    const user = JSON.parse(config.data);
    const uidObj = {
      uid: 2,
      role: 'admin',
    };
    const userObj = { ...user, ...uidObj };
    Users.push(userObj);
    return new Promise((resolve, reject) => {
      if (resolve) {
        setTimeout(() => {
          resolve([
            200,
            {
              success: true,
              results: userObj,
            },
          ]);
        });
      } else {
        reject(
          new Error(
            'Email and password are invalid. Please enter correct email and password',
          ),
        );
      }
    });
  });

  // mock.onPost(API.verifyUserCode.get).reply((config: any) => {
  //   const request = JSON.parse(config.data);
  //   const codeObj = Codes.find((c) => c.code === request.code);
  //   const userData = Users.find((usr) => usr.uid === codeObj?.user_id);
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (userData) {
  //         resolve([
  //           200,
  //           {
  //             success: true,
  //             result: userData.email,
  //           },
  //         ]);
  //       } else {
  //         reject(new Error('Something Went Wrong'));
  //       }
  //     });
  //   });
  // });

  // mock.onPost(API.forgotPassword.post).reply((config: any) => {
  //   const data = JSON.parse(config.data);
  //   return new Promise((resolve, reject) => {
  //     if (resolve) {
  //       setTimeout(() => {
  //         resolve([
  //           200,
  //           {
  //             success: true,
  //             results: data,
  //           },
  //         ]);
  //       });
  //     } else {
  //       reject(new Error('Email is invalid. Please enter correct email'));
  //     }
  //   });
  // });

  // mock.onPost(API.setPassword.post).reply((config: any) => {
  //   const data = JSON.parse(config.data);
  //   const userIndex = Users.findIndex((usr) => usr.email === data.email);
  //   if (userIndex > -1) {
  //     Users[userIndex].password = data.password;
  //   }
  //   return new Promise((resolve, reject) => {
  //     if (resolve) {
  //       setTimeout(() => {
  //         resolve([
  //           200,
  //           {
  //             success: true,
  //             result: 'Your account password reset successfully',
  //           },
  //         ]);
  //       });
  //     } else {
  //       reject(new Error('Email is invalid. Please enter correct email'));
  //     }
  //   });
  // });

  // mock.onGet(API.getUserInfo.get).reply(
  //   () =>
  //     new Promise((resolve, reject) => {
  //       if (resolve) {
  //         const userObj = {
  //           uid: Users[0].uid,
  //           username: Users[0].username,
  //           role: Users[0].role,
  //           email: Users[0].email,
  //           firstName: Users[0].firstName,
  //           lastName: Users[0].lastName,
  //         };
  //         setTimeout(() => {
  //           resolve([
  //             200,
  //             {
  //               success: true,
  //               results: userObj,
  //             },
  //           ]);
  //         });
  //       } else {
  //         reject(new Error('error'));
  //       }
  //     }),
  // );

  mock.onGet(API.getCompaniesList.get).reply((config) => {
    const queryParams = config.params;
    let sortedData = [...Companies];
    sortedData = queryParams.sort === 'asc' ? sortedData : sortedData.reverse();
    return new Promise((resolve, reject) => {
      if (resolve) {
        const companiesData = {
          data: sortedData,
          total: sortedData.length,
        };
        setTimeout(() => {
          resolve([
            200,
            {
              success: true,
              results: companiesData,
            },
          ]);
        });
      } else {
        reject(new Error('error'));
      }
    });
  });
};

export default MockAPI;
