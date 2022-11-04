export default function executable(DELAYTIME) {
    let beforeTime = -new Date();

    return function () {
        if (new Date() - beforeTime > DELAYTIME) {
            beforeTime = new Date();
            return true;
        }
    }
}

