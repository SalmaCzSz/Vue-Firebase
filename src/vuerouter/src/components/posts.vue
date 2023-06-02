<template>
    <div>
        <h1 v-topfix:fondo.Orchid="150">Recepción del parametro de la ruta</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ante fames, donec velit urna a aenean sagittis vivamus cursus natoque, ad ligula iaculis magna mauris sed per at. Himenaeos fusce quisque nulla vulputate tristique convallis ligula nunc aptent, odio euismod a natoque velit magnis risus congue consequat, mauris aenean leo senectus pretium cursus nisi lacinia. Justo torquent nam senectus sodales pretium sollicitudin iaculis dapibus eget nascetur, elementum ultrices class cum tempor id volutpat porta himenaeos, maecenas nunc rutrum curabitur vestibulum duis ornare eros lectus. Velit praesent phasellus commodo gravida et auctor tincidunt at hac facilisi, venenatis habitant pharetra ac litora tristique sem volutpat fusce rutrum, mauris metus curabitur cursus ut vulputate in hendrerit scelerisque.
            Mattis nullam fames sollicitudin a vulputate hac sed, sociosqu nostra cubilia tempus egestas convallis proin cursus, et at sem euismod dignissim dapibus. Cursus nunc praesent ultricies platea leo imperdiet curae neque class mattis porta, blandit tortor vestibulum dapibus sed nibh porttitor venenatis proin iaculis, conubia metus vitae luctus libero dui facilisi viverra lectus molestie. Ut et eleifend posuere ullamcorper parturient fusce nisl class, sed est ornare vitae ante congue torquent, senectus leo quisque varius magnis platea sollicitudin. Et hendrerit senectus at congue vulputate malesuada integer quis purus, placerat interdum mus hac ligula aptent ante risus vitae facilisi, morbi cubilia nostra suscipit potenti ridiculus consequat sed.
        </p>
        <p>
            Fringilla proin massa dictumst eget id netus dis libero, aliquet volutpat tristique malesuada lacus tellus velit mus, dui arcu neque lectus vivamus nulla pulvinar. Proin curae cras condimentum pharetra ornare per egestas senectus, cubilia nulla accumsan ac aliquet id ut orci, rutrum etiam sem leo nisl turpis cursus. Natoque enim non semper hac mi posuere facilisis scelerisque laoreet, gravida sagittis tincidunt placerat integer nec ligula sollicitudin, et rhoncus fusce commodo potenti class magna turpis.
            In bibendum habitant auctor mollis posuere vel potenti at lacinia, class euismod natoque quisque justo erat etiam sagittis, interdum dis sodales nulla molestie ornare cursus nam. Morbi cubilia tristique nulla auctor dapibus fames curabitur in, nisi elementum platea lobortis nisl enim mus pellentesque, turpis quis etiam velit at conubia pulvinar. Curabitur cras orci sagittis inceptos ad platea aliquet aliquam interdum suspendisse, ultrices dignissim quis per nec congue enim laoreet fames venenatis etiam, id vel eget sociis viverra vivamus maecenas hendrerit primis. Magnis velit tempor purus justo mollis, mi torquent class proin tincidunt vivamus, metus fermentum primis orci.
        </p>
         <p> {{id}} </p>
    </div>
</template>

<script>
    export default{
        name: "comPosts",
        data(){
            const {id} = this.$route.params
            return {
                id
            }
        },
        watch: {
            '$route' (to) {
                this.id = to.params.id
            }
        }
    }
</script>

<style>
</style>