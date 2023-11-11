import React from 'react';
import {
    LockOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    ProFormText,
} from '@ant-design/pro-components';
export default function PasswordLogin() {
    return (
        <>
        <ProFormText
            name="username"
            fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
                {
                    required: true,
                    message: '请输入用户名!',
                },
            ]}
        />
        <ProFormText.Password
            name="password"
            fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: ant.design'}
            rules={[
                {
                    required: true,
                    message: '请输入密码！',
                },
            ]}
        />
    </>
    )
}