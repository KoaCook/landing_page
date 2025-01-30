import { Rubik } from 'next/font/google';
import './globals.css';
import Header from './component/Header';
import Wrapper from './component/Wrapper';

import './assets/css/tailwind.css';
import './assets/scss/tailwind.scss';

import './assets/scss/icons.scss';
import Footer from './component/Footer';
import Switcher from './component/Switcher';

const rubic = Rubik({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-rubic',
});

export const metadata = {
    title: 'Upwind - Next Js Landing Page Template',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="LTR">
            <body className={`${rubic.variable}`}>
                <Wrapper>
                    <Header />
                    {children}

                    <Footer />
                    <Switcher />
                </Wrapper>
            </body>
        </html>
    );
}
