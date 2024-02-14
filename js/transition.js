function onTransitionEnd(fNode, prop, f, precision, timeout) {
    precision = precision || 5;
    timeout = timeout || Infinity;
    return new Promise(function (res) {
        const node = fNode();
        let oValue = node && getComputedStyle(node)[prop];
        let currentFrame = watchCurrentFrame(
            fNode,
            function (counter) {
                if (counter.counter * 17 >= timeout) {
                    window.cancelAnimationFrame(currentFrame.value);
                }
                if (++counter.counter % precision === 0) {
                    if (!this()) {
                        return
                    }
                    const nValue = getComputedStyle(this())[prop];
                    if (nValue === oValue) {
                        return true;
                    }
                    oValue = nValue;
                }
            },
            function (counter) {
                res(f.call(fNode(), prop));
            },
            {counter: 0}
        );
    });
}

function watchCurrentFrame(obj, test, action, options) {
    const currentFrame = {value: undefined};

    function watch() {
        if (test.call(obj, options)) {
            action.call(obj, options);
            return;
        }
        currentFrame.value = window.requestAnimationFrame(watch);
    }

    currentFrame.value = window.requestAnimationFrame(watch);
    return currentFrame;
}
