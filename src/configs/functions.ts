import crypto from 'crypto';
import { base64_encode } from './Encode';

export function getFileExtension(filename: string): string {
  const parts = filename.split('.');
  return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
}

export function isImageFile(filename: string): boolean {
  const ext = getFileExtension(filename);
  return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(ext);
}

export function isVideoFile(filename: string): boolean {
  const ext = getFileExtension(filename);
  return ['mp4', 'mov', 'avi', 'mkv', 'webm'].includes(ext);
}

export function GetIV() {
    const iv = crypto.randomBytes(16);

    return iv;
}

export function isMobile(): boolean {
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    const userAgent = window.navigator.userAgent;
    if (screenWidth < 768 || /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      
      return true;
    }
  }
  
  return false;
}

export function windowWidth(): number {
  if (typeof window !== 'undefined') {
    const screenWidth = window.innerWidth;
    
    return screenWidth;
  }
  
  return -1;
}

export function EncryptSchoolIdDataToServer(text: string) {
  const iv = crypto.randomBytes(16);
  const key = crypto.randomBytes(32);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const data = { iv: iv.toString("hex"), key: key.toString("hex"), encrypted };

  return base64_encode(JSON.stringify(data));
}

export function EncryptDataAES256GCM(text: string, key: string) { //这个有问题
  const iv = GetIV();
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag();

  return { iv: iv.toString('hex'), encrypted, tag: tag.toString('hex') };
}

export function DecryptDataAES256GCM(encrypted: string, iv: string, tag: string, key: string) {
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'hex'));
  decipher.setAuthTag(Buffer.from(tag, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
}

export function formatTimestampMemo(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const currentDate = new Date();
  const timeDifference = (currentDate.getTime() - date.getTime()) / 1000;
  if(timestamp == undefined) return ""
  let timeMemo = '';
  if (timeDifference < 60) {
    timeMemo =  ` (${Math.floor(timeDifference)} seconds)`;
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    timeMemo =  ` (${minutes} minute${minutes > 1 ? "s" : ""})`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    timeMemo =  ` (about ${hours} hour${hours > 1 ? "s" : ""})`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    timeMemo =  ` (about ${days} day${days > 1 ? "s" : ""})`;
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm} ${timeMemo}`;

  return formattedDate;
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份是 0 基
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

export function formatTimestampAge(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const currentDate = new Date();
  const timeDifference = (currentDate.getTime() - date.getTime()) / 1000;
  if(timestamp == undefined) return ""
  let timeMemo = '';
  if (timeDifference < 60) {
    timeMemo =  `${Math.floor(timeDifference)} seconds`;
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    timeMemo =  `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else if (timeDifference < 86400) {
    const hours = Math.floor(timeDifference / 3600);
    timeMemo =  `about ${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    const days = Math.floor(timeDifference / 86400);
    timeMemo =  `about ${days} day${days > 1 ? "s" : ""}`;
  }
  
  return timeMemo;
}

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  if(timestamp == undefined) return ""
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;

  return formattedDate;
}

/**
 * 严格验证输入 ID 字符串的安全性。
 * * 规则：
 * 1. 只允许数字 (0-9)、大小写字母 (a-z, A-Z)。
 * 2. 允许特定的符号：连字符 (-), 下划线 (_), 等号 (=)。
 * 3. 此规则集覆盖了 BASE64 编码字符、BASE64 URL安全编码字符以及标准的 SHA256 十六进制散列值。
 * * @param id 待验证的 ID 字符串
 * @returns boolean 如果 ID 安全则返回 true，否则返回 false。
 */
export function isSafeId(id: string | undefined | null): boolean {
    // 1. 检查是否为空值
    if (!id || typeof id !== 'string' || id.length === 0) {
        return false;
    }

    // 2. 定义安全白名单正则表达式
    // ^[a-zA-Z0-9\-_=]+$
    const safeIdRegex = /^[a-zA-Z0-9\-_=]+$/;

    // 3. 执行匹配
    return safeIdRegex.test(id);
}

/**
 * 校验 URL 是否安全，防止 XSS 和意外协议加载。
 * 排除 'javascript:', 'data:', 'file:' 等不安全或非预期的协议。
 */
export function isSafeUrl(url: string): boolean {
    // 确保 URL 是字符串且非空
    if (typeof url !== 'string' || url.length === 0) {
        return false;
    }
    // 强制转换为小写进行协议检查
    const lowerUrl = url.toLowerCase().trim();
    
    // 必须以安全的协议开头
    if (lowerUrl.startsWith('http://') || lowerUrl.startsWith('https://')) {
        return true;
    }
    // 允许相对路径（但要防止路径穿越，如果可能）
    if (lowerUrl.startsWith('/') && !lowerUrl.includes('../')) {
        return true;
    }
    
    return false; // 拒绝所有其他协议，包括 javascript: 等
}
