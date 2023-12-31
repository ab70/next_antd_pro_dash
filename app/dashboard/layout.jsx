"use client"
import {
    GithubFilled,
    InfoCircleFilled,
    PlusCircleFilled,
    QuestionCircleFilled,
    SearchOutlined,
} from '@ant-design/icons';
// import type { ProSettings } from '@ant-design/pro-components';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { Input } from 'antd';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import defaultProps from "../constants/_defaultProps"
// import useWindowWidth from "../constants/useWindowWidth"
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
    children
}) {
    const settings = {
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
    };
    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerHeight, window.innerWidth)
        })
        setDomLoaded(true);
    }, []);

    return (
        <>
            {
                domLoaded ? (

                    <div
                        id="test-pro-layout"
                        style={{
                            height: '100vh',
                        }}
                    >
                        <ProLayout
                            bgLayoutImgList={[
                                {
                                    src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                    left: 85,
                                    bottom: 100,
                                    height: '303px',
                                },
                                {
                                    src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                    bottom: -68,
                                    right: -45,
                                    height: '303px',
                                },
                                {
                                    src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                                    bottom: 0,
                                    left: 0,
                                    width: '331px',
                                },
                            ]}
                            
                            {...defaultProps}
                            location={{
                                pathname,
                            }}
                            menu={{
                                type: 'group',
                            }}
                            avatarProps={{
                                src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                                size: 'small',
                                title: '七妮妮',
                            }}
                            actionsRender={(props) => {
                                if (props.isMobile) return [];
                                return [
                                    <InfoCircleFilled key="InfoCircleFilled" />,
                                    <QuestionCircleFilled key="QuestionCircleFilled" />,
                                    <GithubFilled key="GithubFilled" />,
                                ];
                            }}
                            menuFooterRender={(props) => {
                                if (props?.collapsed) return undefined;
                                return (
                                    <div
                                        style={{
                                            textAlign: 'center',
                                            paddingBlockStart: 12,
                                        }}
                                    >
                                        <div>© 2023 Made with love</div>
                                        <div>by <b style={{ color: "blueviolet" }}>A</b>brar</div>
                                    </div>
                                );
                            }}
                            onMenuHeaderClick={(e) => console.log(e)}
                            title="nIAM"
                            logo="https://niam-next.vercel.app/_next/image?url=%2Fimages%2Fniamofficiallogo.png&w=256&q=75"
                            /*-------------------------It renders in left drawer ----------------------------------*/
                            // menuHeaderRender={(logo, title) => (
                            //     <div
                            //         id="customize_menu_header"
                            //         style={{
                            //             height: '32px',
                            //             display: 'flex',
                            //             alignItems: 'center',
                            //             gap: 8,
                            //         }}

                            //     >
                            //         {logo}
                            //         {/* {title} */}
                            //     </div>
                            // )}
                            /*------------------------------it renders at navbar-----------------------*/
                            headerTitleRender={(logo, title, _) => {
                                return (
                                    <a>
                                        {logo}
                                        {/* {title} */}
                                    </a>
                                );
                            }}

                            menuItemRender={(item, dom) => (
                                <div
                                    onClick={() => {
                                        setPathname(item.path || '/welcome');
                                    }}
                                >
                                    {dom}
                                </div>
                            )}
                            {...settings}
                        >
                            <PageContainer breadcrumb={false} title={false}>
                                <ProCard
                                    style={{
                                        height: '100vh',
                                        minHeight: 800,
                                    }}
                                >
                                    {children}
                                </ProCard>
                            </PageContainer>
                        </ProLayout>
                    </div>


                ) : null
            }
        </>

    )
}
