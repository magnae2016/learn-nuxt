<template>
  <div>
    <header>
      <nuxtLink to="/">홈페이지</nuxtLink>
      <nuxtLink to="/main">메인 홈페이지</nuxtLink>
      <nuxtLink to="/product">상품 홈페이지</nuxtLink>
      <h1>{{ $route.name }} 페이지</h1>
    </header>
    <Nuxt />
  </div>
</template>