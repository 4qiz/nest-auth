import { toast } from 'sonner'

// выводит тост, делит его на заголовок и описание по точке
export function toastMessageHandler(error: Error) {
	if (error.message) {
		const errorMessage = error.message
		const firstDotIndex = errorMessage.indexOf('.')

		if (firstDotIndex !== -1) {
			toast.error(errorMessage.slice(0, firstDotIndex), {
				description: errorMessage.slice(firstDotIndex + 1)
			})
		} else {
			toast.error(errorMessage)
		}
	} else {
		toast.error('Ошибка со строны сервера')
	}
}
