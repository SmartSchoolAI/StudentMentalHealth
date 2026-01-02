import { toByteArray, fromByteArray } from 'base64-js';

export function base64_encode (str: string) {
  const byteArray = new TextEncoder().encode(str);
  
  return fromByteArray(byteArray);
}

export function base64_decode (base64Str: string) {
  const byteArray = toByteArray(base64Str);

  return new TextDecoder().decode(byteArray);
}

export function hexToBase64 (hexString: string): string {
	
	return btoa(hexString.match(/\w{2}/g)!.map(function (a) {
		
		return String.fromCharCode(parseInt(a, 16))
	}).join('')).replace(/=+$/, '')
}

export function base64ToHex (base64String: string): string {
	
	return atob(base64String).split('').map(function (c) {
		return ('0' + c.charCodeAt(0).toString(16)).slice(-2)
	}).join('')
}

export function encode (text: string) {
	const encoder = new TextEncoder()
	
	return encoder.encode(text)
}

export function decode (buffer: BufferSource) {
	const decoder = new TextDecoder()
	
	return decoder.decode(buffer)
}