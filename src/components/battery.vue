<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
      this.battery();
  },
  methods: {
    battery() {
      navigator.getBattery().then(function(battery) {
        console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
        console.log("Battery level: " + battery.level * 100 + "%");
        console.log(
          "Battery charging time: " + battery.chargingTime + " seconds"
        );
        console.log(
          "Battery discharging time: " + battery.dischargingTime + " seconds"
        );

        battery.addEventListener("chargingchange", function() {
          console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
        });

        battery.addEventListener("levelchange", function() {
          console.log("Battery level: " + battery.level * 100 + "%");
        });

        battery.addEventListener("chargingtimechange", function() {
          console.log(
            "Battery charging time: " + battery.chargingTime + " seconds"
          );
        });

        battery.addEventListener("dischargingtimechange", function() {
          console.log(
            "Battery discharging time: " + battery.dischargingTime + " seconds"
          );
        });
      });
    }
  }
};
</script>
    
<style>
</style>
