/**
 * This is a data structiure used to diplay links .
 */

export class Link {
  /**  This is the URL targeted by the link */
  public href: string;
  /**  This is the text value to be displayed by the link */
  public value: string;

  constructor(href: string, value: string) {
    this.href = href;
    this.value = value;
  }
}
