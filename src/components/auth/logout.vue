<template> 
<div>
    </div>
</template>

<script>
import userServices from "../../services/userServices";
export default {
  name: "Logout",
  created() {
    userServices.logout();
    window.location = '/';
  },
};
</script>

<style></style>
