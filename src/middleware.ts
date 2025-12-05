import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = (context, next) => {
  const url = context.url;
  
  if (url.pathname === '/Must-Be-Cow-Redesign') {
    const newUrl = new URL(url);
    newUrl.pathname = '/Must-Be-Cow-Redesign/';
    return context.redirect(newUrl.toString(), 301);
  }
  
  return next();
};

