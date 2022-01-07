/**
 * 
 * @param Component 
 * @param getLayout (page) => {<Layout>{page}</Layout>}
 * @returns 
 */
export default function withLayout(Component, getLayout) {
    Component.getLayout = getLayout;
    return Component;
}