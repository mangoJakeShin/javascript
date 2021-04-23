function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    return xmasDay;
  }
  const timeCounter = document.querySelector("h2");
  
  function countDays() {
    const xmasDay = getTime();
    const now = new Date();
    const SEC = 1000,
      MINUTE = SEC * 60,
      HOUR = MINUTE * 60,
      DAY = HOUR * 24;
    const targ = new Date(xmasDay - now);
  
    const targDay = parseInt(targ / DAY, 10);
    const targHour = parseInt((targ % DAY) / HOUR, 10);
    const targMin = parseInt(((targ % DAY) % HOUR) / MINUTE, 10);
    const targSec = parseInt((((targ % DAY) % HOUR) % MINUTE) / SEC, 10);
  
    timeCounter.innerText = `${targDay < 10 ? `0${targDay}` : targDay}d ${
      targHour < 10 ? `0${targHour}` : targHour
    }h  ${targMin < 10 ? `0${targMin}` : targMin}m ${
      targSec < 10 ? `0${targSec}` : targSec
    }s`;
  }
  
  function init() {
    countDays();
    setInterval(countDays, 1000);
  }
  init();
  