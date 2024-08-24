import { NextRequest, NextResponse } from 'next/server';

export const config = {
	matcher: ['/', '/contacts', '/contacts/:id']
};

export function middleware(req: NextRequest) {
	const basicAuth = req.headers.get('authorization');

	if (!basicAuth) {
		return new NextResponse('Authentication required', {
			status: 401,
			headers: { 'WWW-Authenticate': "Basic realm='private_pages'" }
		});
	}

	const authValue = basicAuth.split(' ')[1];
	const [user, pwd] = atob(authValue).split(':');

	if (!(user === process.env.BASIC_AUTH_USER) || !(pwd === process.env.BASIC_AUTH_PASSWORD)) {
		return new NextResponse('Authentication required', {
			status: 401,
			headers: { 'WWW-Authenticate': "Basic realm='private_pages'" }
		});
	}

	return NextResponse.next();
}
