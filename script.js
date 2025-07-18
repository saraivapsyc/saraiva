document.addEventListener('DOMContentLoaded', function() {
    // Simulação de notificações de compra
    function showPurchaseNotification() {
        const names = ['Carlos', 'Ana', 'Pedro', 'Mariana', 'Lucas', 'Juliana', 'Rafael', 'Fernanda'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        
        const notification = document.querySelector('.purchase-notification');
        const notificationText = notification.querySelector('span');
        
        notificationText.textContent = `${randomName} acabou de adquirir poder!`;
        
        notification.style.display = 'flex';
        notification.style.animation = 'slideIn 0.5s ease-out, fadeOut 0.5s ease-in 4.5s forwards';
        
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
        
        // Agendar próxima notificação
        setTimeout(showPurchaseNotification, Math.random() * 15000 + 10000); // Entre 10 e 25 segundos
    }
    
    // Iniciar notificações após um pequeno delay
    setTimeout(showPurchaseNotification, 3000);
    
    // Efeito hover nos cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(153, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Efeito de pulsação no botão de carrinho
    const cartBtn = document.querySelector('.cart-btn');
    function pulseAnimation() {
        cartBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 500);
    }
    
    // Pulsar a cada 5 segundos
    setInterval(pulseAnimation, 5000);
    
    // Efeito de brilho vermelho no fundo
    const body = document.body;
    function glowEffect() {
        body.style.boxShadow = 'inset 0 0 100px rgba(153, 0, 0, 0.3)';
        setTimeout(() => {
            body.style.boxShadow = 'inset 0 0 100px rgba(153, 0, 0, 0.1)';
        }, 2000);
    }
    
    // Aplicar efeito de brilho a cada 8 segundos
    setInterval(glowEffect, 8000);
    
    // Simulação de contador de visualizações
    const viewerCounter = document.createElement('div');
    viewerCounter.className = 'viewer-counter';
    viewerCounter.innerHTML = `<i class="fas fa-eye"></i> <span>${Math.floor(Math.random() * 50) + 20}</span> pessoas estão visualizando agora`;
    viewerCounter.style.position = 'fixed';
    viewerCounter.style.bottom = '20px';
    viewerCounter.style.right = '20px';
    viewerCounter.style.backgroundColor = 'rgba(17, 17, 17, 0.8)';
    viewerCounter.style.color = '#fff';
    viewerCounter.style.padding = '8px 12px';
    viewerCounter.style.borderRadius = '5px';
    viewerCounter.style.fontSize = '12px';
    viewerCounter.style.zIndex = '1000';
    viewerCounter.style.border = '1px solid #990000';
    
    document.body.appendChild(viewerCounter);
    
    // Atualizar contador aleatoriamente
    setInterval(() => {
        const currentCount = parseInt(viewerCounter.querySelector('span').textContent);
        const change = Math.floor(Math.random() * 5) - 2; // -2 a +2
        const newCount = Math.max(15, currentCount + change);
        viewerCounter.querySelector('span').textContent = newCount;
    }, 5000);
    
    // Adicionar funcionalidade aos botões de compra
    const buyButtons = document.querySelectorAll('.buy-now-btn, .add-cart-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Efeito visual ao clicar
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Mensagem de produto adicionado
            if (this.classList.contains('add-cart-btn')) {
                const notification = document.createElement('div');
                notification.className = 'cart-notification';
                notification.textContent = 'Produto adicionado ao carrinho';
                notification.style.position = 'fixed';
                notification.style.top = '80px';
                notification.style.left = '50%';
                notification.style.transform = 'translateX(-50%)';
                notification.style.backgroundColor = '#990000';
                notification.style.color = '#fff';
                notification.style.padding = '10px 20px';
                notification.style.borderRadius = '5px';
                notification.style.zIndex = '1001';
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        notification.remove();
                    }, 500);
                }, 2000);
            }
        });
    });
});
