import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header /> {/* Adjust height and color as needed */}
            <main className="flex-1 overflow-y-auto">
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp;
