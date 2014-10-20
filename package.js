Package.describe({
    summary: "Principal graph",
    name: "mylar:principal",
    version: "0.1.1",
    git: "https://github.com/gliesesoftware/mylar-principal.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.1');

    api.use(['meteor-platform', 'http', 'accounts-base', 'mylar:basic-crypto', 'mylar:timing', 'mylar:async'], ['client', 'server']);

    api.addFiles(['graphmodel.js', 'certs.js', 'principal.js', 'collection_hook.js'], ['client', 'server']);

    // TODO: just export one variable containing all these
    api.export("Principal");
    api.export("PrincAttr");
    api.export("Principals");
    api.export("is_indexable");
    api.export("rand_field_name");
    api.export("search_field_name");
    api.export("WrappedKeys");
    api.export("active_attacker");
});
