class HelperClass {
    

    /**
     * 
     * 
     * @param {value} Number is refers to a breakpoint if the screen width crosss this breakpoint then param resolve will trigger
     * @param {resolve} Callback function 
     * @since v1.0.0
     */ 
    isBigger( value, resolve ) {
        let width       = screen.width;
        let isBigger    = width > value ? true : false;

        window.onresize = () => {
            width = screen.width;
            if( !isBigger && width > value ) {
                isBigger = true;
                resolve(isBigger, width)
            } 
            else if( isBigger && width <= value ) {
                isBigger = false;
                resolve(isBigger, width)
            }
        }
        resolve(isBigger, width)
    }

    /**
    *
    *
    * Build Intersection Threshold list
    */
    buildThresholdList( to ) {
        let thresholds = [];
        let numSteps = to;

        for (let i=1.0; i<=numSteps; i++) {
          let ratio = i/numSteps;
          thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

}

const Helper = new HelperClass;
export default Helper;