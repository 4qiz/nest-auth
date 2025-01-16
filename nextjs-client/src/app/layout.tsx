import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { MainProvider } from '@/shared/providers'
import '@/shared/styles/globals.css'

export const metadata: Metadata = {
	title: {
		absolute: 'Авторизация',
		template: '%s | Панель'
	},
	description: 'Авторизация'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' data-rh='true' href='/favicon.ico' />
			</head>
			<body className={GeistSans.variable}>
				<MainProvider>
					<div className='relative flex min-h-screen flex-col'>
						<div className='flex h-screen w-full items-center justify-center px-4'>
							{children}
						</div>
					</div>
				</MainProvider>
			</body>
		</html>
	)
}
