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
import dynamic from 'next/dynamic';
const LoginPage = dynamic(() => import("./Components/auth_Components/login"))
const SignUpPage = dynamic(() => import("./Components/auth_Components/signup"))
// import niamOfficiallogo from "../public/niamofficiallogo.png"

const Home = () => {
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
        {
            key: 'phone',
            label: 'Phone',
            children: <LoginPage />,
        },
        {
            key: 'account',
            label: 'Account',
            children: <SignUpPage />,
        },
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
                                                <Space style={{ marginLeft: "25%" }}>

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
                                            items={items}
                                            onChange={(activeKey) => setLoginType(activeKey)}
                                        />
                                           

                                        <div
                                            style={{
                                                marginBlockEnd: 24,
                                            }}
                                        >
                                            <ProFormCheckbox noStyle name="autoLogin">
                                                Remember
                                            </ProFormCheckbox>
                                            <a
                                                style={{
                                                    float: 'right',
                                                }}
                                            >
                                            Forgot Password
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

export default Home