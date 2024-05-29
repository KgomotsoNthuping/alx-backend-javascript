<<<<<<< HEAD

rt default function handleResponseFromAPI(promise) {
=======
export default function handleResponseFromAPI(promise) {
>>>>>>> b6e910caae30ecb4357d6f35421fa152e99048a4
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(console.log('Got a response from the API'));
}
<<<<<<< HEAD

=======
>>>>>>> b6e910caae30ecb4357d6f35421fa152e99048a4
