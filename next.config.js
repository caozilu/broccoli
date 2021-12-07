module.exports = {
  async rewrites() {
    return [
      {
        source: "/:apis*",
        destination: `http://localhost:8000/:apis*`,
      },
    ];
  },
};
