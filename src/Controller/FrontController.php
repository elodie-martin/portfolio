<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FrontController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(Request $request, \Swift_Mailer $mailer)
    {
        $form = $this->createForm(ContactType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            $contactForm = $form->getData();

            $message = (new \Swift_Message('Formulaire de contact elodie-martin.com'))
                ->setFrom($contactForm['email'])
                ->setTo('contact@elodie-martin.com')
                ->setBody(
                    $this->renderView(
                        'front/mail/mail.html.twig',
                        ['contactForm' => $contactForm]
                    ),
                    'text/html'
                );

            $mailer->send($message);

            return $this->redirectToRoute('home');
        }

        return $this->render('front/home.html.twig', [
            'controller_name' => 'FrontController',
            'formContact' => $form->createView()
        ]);
    }
}
