// TODO: Write your class in this file

class SoftPlay {
  constructor() {
    this.adults = 0;
    this.children = 0;
  }

  enter( adults, children ) {

    // Must have adult when children arrive
    if ( adults <=0 && children > 0 ) return false;

    this.adults += adults;
    this.children += children;

    return true;
  }

  leave( adults, children ) {
    // No kids leave alone
    if ( children > 0 && adults === 0 ) return false;

    // More can't leave than are present
    if ( this.adults - adults < 0 || this.children - children < 0 ) return false;

    // Must have as many adults as children when leaving
    //   Check that same groups leave as come in - kind of!
    //   TODO: Broken - Enter: 1+2c, 1+1c. Leave 1+1c FAILS!
    if ( this.adults - adults < this.children - children ) return false;


    this.adults -= adults;
    this.children -= children;

    return true;
  }

  occupancy() {
    return {
      adults: this.adults,
      children: this.children
    }
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay
}
