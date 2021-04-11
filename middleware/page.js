export default async function ({ params, store, route }) {
  try {
    await store.dispatch('view/LogPage', route.path);
    await store.dispatch('page/fetchPages');
  } catch (e) {
    error({
      statusCode: 503,
      message: 'Unable to fetch posts at this time. Please try again.'
    })
  }
}
