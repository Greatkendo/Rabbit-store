const { default: UserManagement } = require("@/components/admin/usermangement");

function Users () {
 return(
  <section>
   <UserManagement />
  </section>
 );
};

export default Users;