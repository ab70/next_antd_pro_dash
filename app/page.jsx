"use client"
import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
    setAlpha,
} from '@ant-design/pro-components';
import { Divider, Space, Tabs, message, theme } from 'antd';
import { useEffect, useState } from 'react';
import styles from "./style.module.css"
import Image from 'next/image'
// import niamOfficiallogo from "../public/niamofficiallogo.png"

export default () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerHeight, window.innerWidth)
        })
        setDomLoaded(true);
    }, []);
    const { token } = theme.useToken();
    const [loginType, setLoginType] = useState('phone');

    const iconStyles = {
        marginInlineStart: '16px',
        color: setAlpha(token.colorTextBase, 0.2),
        fontSize: '24px',
        verticalAlign: 'middle',
        cursor: 'pointer',
    };
    const items = [

    ]

    return (
        <>
            {
                domLoaded ?
                    (
                        <div className={styles.backgroundImage}>


                            <ProConfigProvider hashed={false} >
                                <div >
                                    <LoginForm
                                        // backgroundImageUrl="https://niam-next.vercel.app/images/niamsigninbg.svg"
                                        logo={
                                            <Image
                                                src="/niamofficiallogo.png"
                                                height={40}
                                                width={55}
                                            />
                                        }

                                        title="nIAM"
                                        subTitle="Most comprehensive IAM solution"
                                        // containerStyle={{
                                        //     // backgroundColor: 'rgba(0, 0, 0,0.65)',
                                        //     // backdropFilter: 'blur(0px)',
                                        // }}
                                        actions={
                                            <>
                                                <Divider plain>
                                                    Other login methods
                                                </Divider>
                                                <Space style={{marginLeft: "25%"}}>

                                                    <AlipayCircleOutlined style={iconStyles} />
                                                    <TaobaoCircleOutlined style={iconStyles} />
                                                    <WeiboCircleOutlined style={iconStyles} />
                                                </Space>
                                            </>


                                        }
                                    >
                                        <Tabs
                                            centered
                                            activeKey={loginType}
                                            onChange={(activeKey) => setLoginType(activeKey)}
                                        >
                                            <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
                                            <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
                                        </Tabs>
                                        {loginType === 'account' && (
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
                                        )}
                                        {loginType === 'phone' && (
                                            <>
                                                <ProFormText
                                                    fieldProps={{
                                                        size: 'large',
                                                        prefix: <MobileOutlined className={'prefixIcon'} />,
                                                    }}
                                                    name="mobile"
                                                    placeholder={'手机号'}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '请输入手机号！',
                                                        },
                                                        {
                                                            pattern: /^1\d{10}$/,
                                                            message: '手机号格式错误！',
                                                        },
                                                    ]}
                                                />
                                                <ProFormCaptcha
                                                    fieldProps={{
                                                        size: 'large',
                                                        prefix: <LockOutlined className={'prefixIcon'} />,
                                                    }}
                                                    captchaProps={{
                                                        size: 'large',
                                                    }}
                                                    placeholder={'请输入验证码'}
                                                    captchaTextRender={(timing, count) => {
                                                        if (timing) {
                                                            return `${count} ${'获取验证码'}`;
                                                        }
                                                        return '获取验证码';
                                                    }}
                                                    name="captcha"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: '请输入验证码！',
                                                        },
                                                    ]}
                                                    onGetCaptcha={async () => {
                                                        message.success('获取验证码成功！验证码为：1234');
                                                    }}
                                                />
                                            </>
                                        )}
                                        <div
                                            style={{
                                                marginBlockEnd: 24,
                                            }}
                                        >
                                            <ProFormCheckbox noStyle name="autoLogin">
                                                自动登录
                                            </ProFormCheckbox>
                                            <a
                                                style={{
                                                    float: 'right',
                                                }}
                                            >
                                                忘记密码
                                            </a>
                                        </div>
                                    </LoginForm>
                                </div>
                            </ProConfigProvider>
                        </div>
                    ) : null
            }
        </>

    );
};