import 'express-session'

// расширение стандартной сессии, для userId
declare module 'express-session' {
	interface SessionData {
		userId?: string
	}
}
