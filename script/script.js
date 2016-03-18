// 2 petits trucs un peu dégueux codé à l'arrache pour mettre à jour un élement de texte et une image périodiquement
// Cette fonction est executée une fois le chargement de toute la page terminée
$(function() {

  // On recherche tous les éléments avec l'attribut data-html-src
  $("[data-html-src]").each(function(i, el) {
    // On considère que l'intervale de mise à jour est le contenu de data-reload en nombre de secondes
    var interval = +$(el).data("reload");
    
    // La fonction de mise à jour du contenu utilise juste la fonction load de jquery avec l'adresse contenu dans data-html-src
    var updateEl = function updateEl() {
      $(el).load($(el).data("html-src"));
    };
    
    // Si l'intervale de MAJ n'existe pas ou n'est pas un chiffre, on charge le contenu qu'une seule fois
    if(isNaN(interval)) {
      updateEl();
    } else {
      // Sinon on lui dit de le faire toutes les [interval] secondes
      setInterval(updateEl, interval*1000);
      // Et on le fait maintenant :
      updateEl();
    }
  });

  // On recherche tous les éléments avec l'attribut data-img-src
  $("[data-img-src]").each(function(i, el) {
    // On considère que l'intervale de mise à jour est le contenu de data-reload en nombre de secondes
    var interval = +$(el).data("reload");

    // La fonction de mise à jour du contenu change juste le src de l'image par le contenu de 
    // data-img-src + la date du moment pour ne pas récuperer la version présente dans le cache navigateur
    var updateEl = function updateEl() {
      var url = $(el).data("img-src");
      url += (url.indexOf("?") > -1 ? "&" : "?")+(+new Date());
      $(el).attr("src", url);
    };
    
    // Si l'intervale de MAJ n'existe pas ou n'est pas un chiffre, on charge le contenu qu'une seule fois
    if(isNaN(interval)) {
      updateEl();
    } else {
      // Sinon on lui dit de le faire toutes les [interval] secondes
      setInterval(updateEl, interval*1000);
      // Et on le fait maintenant :
      updateEl();
    }
  });
});
