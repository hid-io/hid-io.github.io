(function() {var implementors = {};
implementors["arrayvec"] = [{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = u8&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;A&gt;",synthetic:false,types:["arrayvec::array_string::ArrayString"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;A as <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;",synthetic:false,types:["arrayvec::ArrayVec"]},];
implementors["bytes"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>",synthetic:false,types:["bytes::bytes::Bytes"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>",synthetic:false,types:["bytes::bytes::BytesMut"]},];
implementors["capnp"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"capnp/text/struct.Builder.html\" title=\"struct capnp::text::Builder\">Builder</a>&lt;'a&gt;",synthetic:false,types:["capnp::text::Builder"]},];
implementors["crossbeam_epoch"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;",synthetic:false,types:["crossbeam_epoch::atomic::Owned"]},];
implementors["failure"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"failure/trait.Fail.html\" title=\"trait failure::Fail\">Fail</a> + 'static&gt; for <a class=\"struct\" href=\"failure/struct.Error.html\" title=\"struct failure::Error\">Error</a>",synthetic:false,types:["failure::error::Error"]},];
implementors["nix"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"nix/sys/signal/enum.Signal.html\" title=\"enum nix::sys::signal::Signal\">Signal</a>",synthetic:false,types:["nix::sys::signal::Signal"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"libc/unix/linux_like/linux/gnu/b64/struct.sigset_t.html\" title=\"struct libc::unix::linux_like::linux::gnu::b64::sigset_t\">sigset_t</a>&gt; for <a class=\"struct\" href=\"nix/sys/signal/struct.SigSet.html\" title=\"struct nix::sys::signal::SigSet\">SigSet</a>",synthetic:false,types:["nix::sys::signal::SigSet"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"libc/unix/struct.timespec.html\" title=\"struct libc::unix::timespec\">timespec</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeSpec.html\" title=\"struct nix::sys::time::TimeSpec\">TimeSpec</a>",synthetic:false,types:["nix::sys::time::TimeSpec"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"libc/unix/struct.timeval.html\" title=\"struct libc::unix::timeval\">timeval</a>&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeVal.html\" title=\"struct nix::sys::time::TimeVal\">TimeVal</a>",synthetic:false,types:["nix::sys::time::TimeVal"]},];
implementors["owning_ref"] = [{text:"impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt;",synthetic:false,types:["owning_ref::OwningRef"]},{text:"impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"owning_ref/struct.OwningRefMut.html\" title=\"struct owning_ref::OwningRefMut\">OwningRefMut</a>&lt;O, T&gt;",synthetic:false,types:["owning_ref::OwningRefMut"]},];
implementors["regex_syntax"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"regex_syntax/hir/literal/struct.Literal.html\" title=\"struct regex_syntax::hir::literal::Literal\">Literal</a>",synthetic:false,types:["regex_syntax::hir::literal::Literal"]},];
implementors["ring"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/digest/struct.Digest.html\" title=\"struct ring::digest::Digest\">Digest</a>",synthetic:false,types:["ring::digest::Digest"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/hmac/struct.Signature.html\" title=\"struct ring::hmac::Signature\">Signature</a>",synthetic:false,types:["ring::hmac::Signature"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ring/signature/struct.Signature.html\" title=\"struct ring::signature::Signature\">Signature</a>",synthetic:false,types:["ring::signature_impl::Signature"]},];
implementors["rustls"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"rustls/struct.Certificate.html\" title=\"struct rustls::Certificate\">Certificate</a>",synthetic:false,types:["rustls::key::Certificate"]},];
implementors["smallvec"] = [{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;",synthetic:false,types:["smallvec::SmallVec"]},];
implementors["tokio_io"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"tokio_io/io/struct.Window.html\" title=\"struct tokio_io::io::Window\">Window</a>&lt;T&gt;",synthetic:false,types:["tokio_io::window::Window"]},];
implementors["webpki"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"webpki/struct.DNSName.html\" title=\"struct webpki::DNSName\">DNSName</a>",synthetic:false,types:["webpki::name::DNSName"]},];
implementors["x11"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XAnyEvent.html\" title=\"struct x11::xlib::XAnyEvent\">XAnyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XButtonEvent.html\" title=\"struct x11::xlib::XButtonEvent\">XButtonEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XCirculateEvent.html\" title=\"struct x11::xlib::XCirculateEvent\">XCirculateEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XCirculateRequestEvent.html\" title=\"struct x11::xlib::XCirculateRequestEvent\">XCirculateRequestEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XClientMessageEvent.html\" title=\"struct x11::xlib::XClientMessageEvent\">XClientMessageEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XColormapEvent.html\" title=\"struct x11::xlib::XColormapEvent\">XColormapEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XConfigureEvent.html\" title=\"struct x11::xlib::XConfigureEvent\">XConfigureEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XConfigureRequestEvent.html\" title=\"struct x11::xlib::XConfigureRequestEvent\">XConfigureRequestEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XCreateWindowEvent.html\" title=\"struct x11::xlib::XCreateWindowEvent\">XCreateWindowEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XCrossingEvent.html\" title=\"struct x11::xlib::XCrossingEvent\">XCrossingEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XDestroyWindowEvent.html\" title=\"struct x11::xlib::XDestroyWindowEvent\">XDestroyWindowEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XErrorEvent.html\" title=\"struct x11::xlib::XErrorEvent\">XErrorEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XExposeEvent.html\" title=\"struct x11::xlib::XExposeEvent\">XExposeEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XFocusChangeEvent.html\" title=\"struct x11::xlib::XFocusChangeEvent\">XFocusChangeEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XGenericEventCookie.html\" title=\"struct x11::xlib::XGenericEventCookie\">XGenericEventCookie</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XGraphicsExposeEvent.html\" title=\"struct x11::xlib::XGraphicsExposeEvent\">XGraphicsExposeEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XGravityEvent.html\" title=\"struct x11::xlib::XGravityEvent\">XGravityEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XKeyEvent.html\" title=\"struct x11::xlib::XKeyEvent\">XKeyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XKeymapEvent.html\" title=\"struct x11::xlib::XKeymapEvent\">XKeymapEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XMapEvent.html\" title=\"struct x11::xlib::XMapEvent\">XMapEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XMappingEvent.html\" title=\"struct x11::xlib::XMappingEvent\">XMappingEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XMapRequestEvent.html\" title=\"struct x11::xlib::XMapRequestEvent\">XMapRequestEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XMotionEvent.html\" title=\"struct x11::xlib::XMotionEvent\">XMotionEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XNoExposeEvent.html\" title=\"struct x11::xlib::XNoExposeEvent\">XNoExposeEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XPropertyEvent.html\" title=\"struct x11::xlib::XPropertyEvent\">XPropertyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XReparentEvent.html\" title=\"struct x11::xlib::XReparentEvent\">XReparentEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XResizeRequestEvent.html\" title=\"struct x11::xlib::XResizeRequestEvent\">XResizeRequestEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XSelectionClearEvent.html\" title=\"struct x11::xlib::XSelectionClearEvent\">XSelectionClearEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XSelectionEvent.html\" title=\"struct x11::xlib::XSelectionEvent\">XSelectionEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XSelectionRequestEvent.html\" title=\"struct x11::xlib::XSelectionRequestEvent\">XSelectionRequestEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XUnmapEvent.html\" title=\"struct x11::xlib::XUnmapEvent\">XUnmapEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xlib/struct.XVisibilityEvent.html\" title=\"struct x11::xlib::XVisibilityEvent\">XVisibilityEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"x11/xlib/struct.ClientMessageData.html\" title=\"struct x11::xlib::ClientMessageData\">ClientMessageData</a>",synthetic:false,types:["x11::xlib::ClientMessageData"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"x11/xlib/struct.ClientMessageData.html\" title=\"struct x11::xlib::ClientMessageData\">ClientMessageData</a>",synthetic:false,types:["x11::xlib::ClientMessageData"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"x11/xlib/struct.ClientMessageData.html\" title=\"struct x11::xlib::ClientMessageData\">ClientMessageData</a>",synthetic:false,types:["x11::xlib::ClientMessageData"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"x11/xlib/struct.ClientMessageData.html\" title=\"struct x11::xlib::ClientMessageData\">ClientMessageData</a>",synthetic:false,types:["x11::xlib::ClientMessageData"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"x11/xlib/struct.ClientMessageData.html\" title=\"struct x11::xlib::ClientMessageData\">ClientMessageData</a>",synthetic:false,types:["x11::xlib::ClientMessageData"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"x11/xlib/struct.ClientMessageData.html\" title=\"struct x11::xlib::ClientMessageData\">ClientMessageData</a>",synthetic:false,types:["x11::xlib::ClientMessageData"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xf86vmode/struct.XF86VidModeNotifyEvent.html\" title=\"struct x11::xf86vmode::XF86VidModeNotifyEvent\">XF86VidModeNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRRScreenChangeNotifyEvent.html\" title=\"struct x11::xrandr::XRRScreenChangeNotifyEvent\">XRRScreenChangeNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRRNotifyEvent.html\" title=\"struct x11::xrandr::XRRNotifyEvent\">XRRNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRROutputChangeNotifyEvent.html\" title=\"struct x11::xrandr::XRROutputChangeNotifyEvent\">XRROutputChangeNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRRCrtcChangeNotifyEvent.html\" title=\"struct x11::xrandr::XRRCrtcChangeNotifyEvent\">XRRCrtcChangeNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRROutputPropertyNotifyEvent.html\" title=\"struct x11::xrandr::XRROutputPropertyNotifyEvent\">XRROutputPropertyNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRRProviderChangeNotifyEvent.html\" title=\"struct x11::xrandr::XRRProviderChangeNotifyEvent\">XRRProviderChangeNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRRProviderPropertyNotifyEvent.html\" title=\"struct x11::xrandr::XRRProviderPropertyNotifyEvent\">XRRProviderPropertyNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xrandr/struct.XRRResourceChangeNotifyEvent.html\" title=\"struct x11::xrandr::XRRResourceChangeNotifyEvent\">XRRResourceChangeNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"x11/xss/struct.XScreenSaverNotifyEvent.html\" title=\"struct x11::xss::XScreenSaverNotifyEvent\">XScreenSaverNotifyEvent</a>&gt; for <a class=\"union\" href=\"x11/xlib/union.XEvent.html\" title=\"union x11::xlib::XEvent\">XEvent</a>",synthetic:false,types:["x11::xlib::XEvent"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
