const styleText = new Proxy(String, {get: () => styleText})

export default styleText
