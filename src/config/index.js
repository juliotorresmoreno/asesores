

const config = {
    hostname: window.location.hostname,
    protocol: "https",
    protocolWss: "wss",
    port: "8443",
    api: "/api/v1",
    wss: "/ws"
};

export const api = `${config.protocol}://${config.hostname}:${config.port}${config.api}`;

export const wss = `${config.protocolWss}://${config.hostname}:${config.port}${config.wss}`;

export default config;