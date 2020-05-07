function cleanup() {
    gl.useProgram(null);
    if (buffer)
      gl.deleteBuffer(buffer);
    if (program)
      gl.deleteProgram(program);
}
