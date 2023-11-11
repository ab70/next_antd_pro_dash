import React from 'react';
import {
    LockOutlined,
    MobileOutlined,

} from '@ant-design/icons';
import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';

export default function PhoneLogin(){
    return (
        <>
        <ProFormText
            fieldProps={{
                size: 'large',
                prefix: (
                    <MobileOutlined
                        style={{
                            color: token.colorText,
                        }}
                        className={'prefixIcon'}
                    />
                ),
            }}
            name="mobile"
            placeholder={'Mobile Number'}
            rules={[
                {
                    required: true,
                    message: 'Please enter a mobile number!',
                },
                {
                    pattern: /^1\d{10}$/,
                    message: 'Invalid phone number format!',
                },
            ]}
        />
        <ProFormCaptcha
            fieldProps={{
                size: 'large',
                prefix: (
                    <LockOutlined
                        style={{
                            color: token.colorText,
                        }}
                        className={'prefixIcon'}
                    />
                ),
            }}
            captchaProps={{
                size: 'large',
            }}
            placeholder={'Enter the code'}
            captchaTextRender={(timing, count) => {
                if (timing) {
                    return `${count} ${'Get code'}`;
                }
                return 'Get code';
            }}
            name="captcha"
            rules={[
                {
                    required: true,
                    message: 'Please enter the code!',
                },
            ]}
            onGetCaptcha={async () => {
                message.success('Code successfully received! The code is: 1234');
            }}
        />
    </>
    )
}