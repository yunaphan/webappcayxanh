<template>
    <div>
        <f7-page login-screen>
        <f7-login-screen-title>Framework7</f7-login-screen-title>
        <f7-list form>
          <f7-list-input
            label="Username"
            type="text"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            label="Password"
            type="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button @click="signIn">Sign In</f7-list-button>
          <f7-block-footer>Some text about login information.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</f7-block-footer>
        </f7-list>
      </f7-page>
    </div>
</template>
