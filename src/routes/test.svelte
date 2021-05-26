<script>
	import { page } from '$app/stores';
	import { post } from '$lib/utils';

	let username = 'zwz';
	let password = '123456';

	async function test() {
		const resData = await post('/v1/token', { username, password });
		const { code, data, msg } = resData;
		if (code === 4001) {
			alert(msg)
		}
		if (code === 2000) {
			const { expires_at, token, user } = data;
			const { nick_name, username } = user;
			alert('expires_at:' + expires_at)
			alert('token:' + token)
			alert('username:' + username)
			alert('nick_name:' + nick_name)
		}
	}

</script>
<div class='container'>
	{$page.path}
	<p><strong> this is test page</strong></p>
	<button on:click={test}>test</button>
</div>
<style>
    .container p {
        text-align: center;
    }
</style>
