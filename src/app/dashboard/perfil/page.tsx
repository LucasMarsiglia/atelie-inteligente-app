'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Camera, Instagram, MapPin, Phone } from 'lucide-react';

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false);

  // Dados simulados
  const [profile, setProfile] = useState({
    name: 'Maria Silva',
    email: 'maria@email.com',
    bio: 'Ceramista artesanal há 10 anos, especializada em peças rústicas e decorativas.',
    location: 'São Paulo, SP',
    phone: '(11) 98765-4321',
    instagram: '@maria.ceramica',
  });

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Perfil</h1>
        <p className="text-gray-600 mt-2">Gerencie suas informações pessoais</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>Suas informações visíveis para compradores</CardDescription>
            </div>
            <Button 
              variant={isEditing ? "outline" : "default"}
              onClick={() => setIsEditing(!isEditing)}
              className={!isEditing ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600" : ""}
            >
              {isEditing ? 'Cancelar' : 'Editar'}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
              <Camera className="h-8 w-8 text-white" />
            </div>
            {isEditing && (
              <Button variant="outline" size="sm">
                Alterar foto
              </Button>
            )}
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input 
                  id="name" 
                  value={profile.name}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biografia</Label>
              <Textarea 
                id="bio" 
                rows={4}
                value={profile.bio}
                disabled={!isEditing}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                placeholder="Conte um pouco sobre você e seu trabalho..."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Localização
                </Label>
                <Input 
                  id="location" 
                  value={profile.location}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  placeholder="Cidade, Estado"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Telefone
                </Label>
                <Input 
                  id="phone" 
                  value={profile.phone}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram" className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                Instagram
              </Label>
              <Input 
                id="instagram" 
                value={profile.instagram}
                disabled={!isEditing}
                onChange={(e) => setProfile({...profile, instagram: e.target.value})}
                placeholder="@seu_usuario"
              />
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-2 pt-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                onClick={() => setIsEditing(false)}
              >
                Salvar Alterações
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configurações de Conta */}
      <Card>
        <CardHeader>
          <CardTitle>Configurações de Conta</CardTitle>
          <CardDescription>Gerencie sua senha e preferências</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Alterar senha
          </Button>
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            Excluir conta
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
