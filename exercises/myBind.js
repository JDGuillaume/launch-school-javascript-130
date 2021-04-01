function myBind(callback, context) {
  return function() {
    return callback.apply(context, arguments);
  };
}
