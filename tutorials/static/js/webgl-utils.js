function cleanup(gl) {
    gl.useProgram(null)
}

function initWebGL(canvasID){
    var canvas = document.querySelector(canvasID);
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    gl.clearColor(1,1,1,1)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
}
function createShader(gl, type, source) {
  var shader = gl.createShader(type); // 创建着色器对象
  gl.shaderSource(shader, source); // 提供数据源
  gl.compileShader(shader); // 编译 -> 生成着色器
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader
  }
  var err = gl.getShaderInfoLog(shader)
  console.log(err)
  gl.deleteShader(shader)
  throw new Error(err)
}
function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
  var err = gl.getProgramInfoLog(program)
  console.log(err)
  gl.deleteProgram(program)
  throw new Error(err)
}
