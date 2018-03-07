

const config = {
    hostname: window.location.hostname,
    protocol: "https",
    port: "8443",
    api: "/api/v1"
};

export const api = `${config.protocol}://${config.hostname}:${config.port}${config.api}`;

export default config;