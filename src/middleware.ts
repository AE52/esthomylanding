import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const locales = ['tr', 'en', 'de', 'fr', 'ru', 'ar']
export const defaultLocale = 'tr'

export const localeNames = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ru: 'Русский',
  ar: 'العربية'
}

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  return acceptLanguage?.split(',')?.[0].split('-')?.[0] || defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
} 