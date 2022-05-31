import { extend } from 'umi-request';
import React, { useEffect } from 'react';

export default function detail() {
  const getData = async () => {
    const request = extend({
      // suffix: ".json",
      headers: {
        'Content-Type': 'application/json',
        accept: ' */*',
        // ' x-basement-token': '2075433e-447a-49ff-9602-b708e1127e07',
        // 'x-serverless-sign': 'c6e9499ac31b7b6c4e4220664ceb2afa',
      },
      errorHandler: function (error) {
        /* 异常处理 */
      },
    });

    const res = await request.post('https://api.bspapp.com/client', {
      data: {
        method: 'serverless.auth.user.anonymousAuthorize',
        params: '{}',
        spaceId: '04f58204-a7de-4dc2-8197-8d63c873a510',
        timestamp: 1653393421517,
      },
    });
    console.log(res);
  };
  useEffect(() => {
    getData();
  });
  return <div>123</div>;
}
