/* global PREMIUM_COMPONENTS_EXIST */
import './admin.scss'

function importAll (r) {
  r.keys().forEach(r)
}

importAll(require.context('../Components/', true, /admin\.js$/))
if (PREMIUM_COMPONENTS_EXIST) {
  importAll(require.context('../flyntPremium/Components/', true, /admin\.js$/))
}
