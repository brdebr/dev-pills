---
title: How to install Sakai in Windows from scratch and manage multiple tomcat instances
description: "A tutorial about how starting from scratch, \n Install everything needed to compile and run an instance of Sakai in Windows, and how to manage multiple of those for development purposes."
image:
    route: '/article-imgs/bram-naus-n8Qb1ZAkK88-unsplash-blurred-optimized.jpg'
    alt-text: 'table with a notebook a laptop and a phone'
    mention: '<span>Photo by <a href="https://unsplash.com/@bramnaus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Bram Naus</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br/><i>· Blurred and optimized after download</i>'
categories:
    - Sakai
    - LMS
    - Windows
createdAt: 2020-09-12T20:48:26.676Z
updatedAt: 2020-09-13T18:36:36.742Z
---

## Objective
<br>

The objective of this tutorial is to create a "tomcat template" configured with all the necessary sakai configurations so that can be copied to create more instances easily.

It's based on the official Sakai installation guides ([Sakai 12](https://confluence.sakaiproject.org/pages/viewpage.action?pageId=107906475), [Sakai 20](https://confluence.sakaiproject.org/pages/viewpage.action?pageId=122617993)), and it's meant to use only for development purposes, deploy to production would require different configurations.
<div class="mb-5"></div>

## What is Sakai
<br>

Sakai is open-source Collaboration and Learning Environment (CLE) software. The Sakai Community develops and distributes the open-source Sakai CLE, an enterprise-ready collaboration and courseware management platform that provides users with a suite of learning, portfolio, library and project tools.
(quoted from [the Sakai wiki](https://confluence.sakaiproject.org/))

<div class="mb-5"></div>

## Let's get this party started
<br>

To begin the installation first it's necessary to install all the dependencies and services necesary to:

- Get the source code,
- Configure a tomcat with the sakai configurations,
- Compile the source code into our tomcat,
- Create a database to store the data and
- Start the server

<br>

#### WORK IN PROGRESS...
<br>

<mvn-builder></mvn-builder>

<br>
Suspendisse nec cursus quam. Sed vel est cursus, tempor sem in, posuere mi. Cras malesuada egestas turpis et condimentum. Praesent dignissim purus luctus risus consectetur, in feugiat nisl convallis. Donec ac euismod ligula. Sed feugiat sollicitudin felis, sed posuere massa molestie at. Donec sit amet finibus leo. Ut sagittis pretium est, et hendrerit enim. Sed et lobortis urna. Maecenas accumsan dui ante, a suscipit nunc aliquet eget.

Integer nec quam luctus, venenatis lacus sed, commodo velit. Praesent non commodo diam. Nulla facilisi. Nullam non ullamcorper nulla, non blandit leo. Nunc imperdiet eu justo sit amet sagittis. Quisque elit purus, sollicitudin vitae molestie ac, porttitor non purus. Integer aliquet augue dignissim suscipit fermentum. Pellentesque vel scelerisque ipsum. Sed id placerat erat, id scelerisque metus. Nulla maximus dolor non faucibus fermentum. Phasellus pharetra id urna quis dictum. Nulla facilisi. Quisque maximus ipsum eros, sed pretium risus vulputate vitae.

Fusce mollis, nulla ac cursus consequat, sapien felis ornare nunc, sed euismod lacus mauris sit amet augue. Duis eget lacus a orci condimentum dignissim et vitae neque. Etiam quis augue eu orci placerat volutpat ac eget leo. Integer sed orci sollicitudin, commodo tortor et, aliquet dui. Donec at tempor libero, vitae suscipit dolor. Donec a placerat mauris, sit amet porttitor purus. In ullamcorper ac felis a congue. Nullam aliquam scelerisque enim, sit amet dictum sem rhoncus nec. Nulla mauris orci, commodo eget faucibus a, vestibulum non augue. Proin auctor consequat quam feugiat blandit. Vestibulum dictum sagittis velit eu fringilla. Nulla vitae mauris ultrices, pretium ligula vel, varius dolor. Nullam eleifend efficitur lectus, at pellentesque eros dictum et.

Nulla facilisi. Mauris elit quam, semper at fringilla malesuada, lobortis eu lectus. Cras facilisis massa a enim varius dictum. In efficitur est non velit iaculis, in placerat diam fringilla. Proin id diam luctus, porttitor nulla vel, consequat massa. Integer lacinia erat fermentum cursus pretium. Pellentesque nec nisl a lorem ullamcorper aliquam. Nulla sit amet lectus eu felis interdum rutrum id ut massa. Integer quis vehicula purus, in malesuada lacus.

Curabitur ullamcorper, lectus eget interdum ornare, nulla tortor interdum felis, sed lobortis est nunc et justo. Nullam lobortis, nunc quis volutpat efficitur, nisi lorem accumsan augue, at pharetra dui justo tempus augue. Praesent dictum est sit amet nunc vestibulum faucibus. Cras neque sapien, porta a sagittis eget, placerat at risus. Pellentesque at lectus nec libero bibendum consectetur non et lectus. Donec in lectus ac justo efficitur elementum vel sit amet dui. Morbi et pellentesque justo. Duis eget venenatis ex. Pellentesque eget egestas ligula. Proin est mi, varius non egestas et, tincidunt non diam. Morbi commodo sollicitudin porttitor. Sed condimentum maximus dolor. Aenean laoreet molestie lobortis. Phasellus euismod, velit non rhoncus porta, velit nunc luctus arcu, imperdiet eleifend velit purus convallis tellus. Aliquam risus elit, vehicula blandit pharetra vitae, commodo ac nisl.

Sed molestie commodo quam, vel aliquam nunc dignissim nec. Pellentesque dictum velit eget congue finibus. Praesent rutrum massa ut erat vulputate dignissim. Ut feugiat sed ipsum quis fringilla. In non tincidunt quam. Cras tincidunt mi metus. Proin et nibh nec mi varius laoreet. Nulla dignissim ex ut mi venenatis, nec elementum elit finibus. Proin vitae magna rutrum, lobortis turpis at, faucibus sem.

Maecenas euismod nisl leo, in malesuada nibh dignissim non. Aenean rutrum quam eu placerat pretium. Proin aliquam nisi at ligula cursus, imperdiet semper sapien faucibus. Nulla quis libero justo. Sed scelerisque lorem eu diam iaculis, vitae euismod quam pharetra. Quisque tempus porttitor mattis. Ut eu enim sed neque volutpat fermentum. Suspendisse mattis diam nisi, at porttitor velit venenatis vel. Aenean et sapien tincidunt, elementum turpis a, malesuada lacus. Donec sagittis venenatis augue et rhoncus. In hac habitasse platea dictumst.

Pellentesque sed ligula aliquet, rhoncus dolor non, rhoncus libero. Morbi vulputate sem sem, id luctus lorem luctus luctus. Sed hendrerit ex nunc, in ultrices odio tincidunt quis. Cras tortor lorem, lobortis vitae eros vel, aliquam vulputate nisl. Nunc volutpat ligula nec ligula fermentum iaculis. Donec non efficitur nisl, in aliquam lorem. Suspendisse rhoncus elit id vulputate accumsan. Aenean lacinia sagittis posuere. Nam diam sapien, mollis ut egestas nec, egestas mattis ipsum. Donec eu lectus non dolor hendrerit faucibus egestas ut mauris.

Nam sit amet porta purus. Fusce tristique dui quis tortor tempus, et eleifend justo cursus. Morbi consequat posuere ornare. Vestibulum erat velit, bibendum et mauris vitae, fringilla eleifend mi. Cras tempor ante nunc, sagittis accumsan urna bibendum vitae. Ut viverra suscipit varius. Sed eu fringilla purus. Phasellus interdum mi dui, sit amet pharetra neque pharetra vel. Curabitur ut imperdiet orci. Donec quis tempor lacus. Aliquam vel fermentum lacus. Fusce id nibh at elit volutpat convallis. Phasellus nec sapien molestie, dignissim sem et, cursus est. Nulla fringilla imperdiet sem nec vulputate. Nulla id vulputate ex, sed interdum nisi.

Vestibulum maximus accumsan velit sit amet pulvinar. Nullam est arcu, efficitur et interdum eget, dictum eget enim. Mauris nulla lorem, laoreet nec tempor id, rutrum sed enim. Cras imperdiet nulla nec dignissim pulvinar. Quisque sed semper nibh, at molestie nunc. Cras pretium sem arcu, non rhoncus nisl consequat ut. Maecenas semper nunc sit amet dolor tempus rhoncus.

Curabitur ligula tellus, tincidunt eget dapibus vulputate, finibus vel dui. Mauris aliquet, dui nec varius hendrerit, ligula ante tincidunt turpis, a mollis arcu erat id odio. Nulla ut fringilla dui. Aenean eu mi nec dui congue ullamcorper nec sed ante. Integer vel turpis ultrices, laoreet tortor eu, tincidunt lorem. Nulla facilisi. Suspendisse laoreet, erat vitae varius egestas, mi velit convallis ipsum, vel lobortis erat magna sed enim. Nam ligula odio, pellentesque ut tortor vitae, fermentum sodales ipsum. Praesent sodales consequat mauris, ut semper erat vulputate ac. Ut tincidunt eros nec lobortis cursus. In arcu turpis, gravida non pharetra in, molestie sed tortor. Sed quis dapibus ipsum. Vivamus turpis mauris, cursus sed rhoncus id, tincidunt nec lacus. Sed in faucibus neque, et gravida elit.