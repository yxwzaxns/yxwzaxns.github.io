function fx_common_fsh(){
    return `#ifdef GL_ES
    //precision mediump float;
    precision highp float;
    #endif
    uniform sampler2D uSrc;
    uniform vec2 uDelta;

    varying vec2 texCoord;
    varying vec2 screenCoord;

    void main(void) {
        gl_FragColor = texture2D(uSrc, texCoord);
    }`
}
