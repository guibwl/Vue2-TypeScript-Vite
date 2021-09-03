import {defineComponent} from '@vue/composition-api';

export default defineComponent({
    setup () {
        return () => (
            <div>
                <h2>File `.tsx` is also supported!</h2>
            </div>
        )
    }
})