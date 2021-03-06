export function controlCamera(bool) {
	return {
		type: 'SHOW_CAMERA',
		payload: bool
	}
}

export function switchCamera(cameraType) {
	return {
		type: 'SWITCH_CAMERA',
		payload: cameraType
	}
}

export function updateProductName(productName) {
	return {
		type: 'UPDATE_PRODUCT_NAME',
		payload: productName
	}
}

export function updateUpc(upc) {
	return {
		type: 'UPDATE_UPC',
		payload: upc
	}
}

export function updateMessage(message) {
	return {
		type: 'UPDATE_MESSAGE',
		payload: message
	}
}