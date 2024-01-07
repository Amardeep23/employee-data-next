/** @type {import('next').NextConfig} */




module.exports = {
  experimental: {
    serverComponents: true,
    serverActions: true,
  },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };