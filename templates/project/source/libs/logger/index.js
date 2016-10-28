/**
 * this class is to be used for all your logging needs
 * the class provides all your development & production
 * loggin all binded to one utility.
 * 
 * by default all console logging is disbaled in
 * NODE_ENV === production although it would be better 
 * practice to strip such code. However this will avoid
 * presenting debugging code to customers
 * 
 * TODO: implement tracking and remote logging (simple
 * stubs provided for convenience).
 */
export class log {

  static message(message) {
    console.log(message);
  }

  static warning(message) {
    console.warn(message);
  }

  static error(message) {
    console.error(message);
  }

  static remote() {
    console.warn(
      'log#remote has not yet implemented... see \'libs/logger\''
    );
  }

  static track() {
    console.warn(
      'log#track has not yet implemented... see \'libs/logger\''
    )
  }

}